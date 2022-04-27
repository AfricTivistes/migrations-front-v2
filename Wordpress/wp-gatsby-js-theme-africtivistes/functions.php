<?php
add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' );

function create_custom_post_type(){

  register_post_type('auteur',
    array(
      'labels' => array(
        'name' =>  __('Auteurs'),
        'singular_name' => __('Auteur'),
        'add_new' => __('Ajouter un auteur(e)'),
        'add_new_item' => __('Ajouter un auteur(e)'),
        'edit_item' => __('Modifier un auteur(e)'),
        'new_item' => __('Nouvel auteur(e)'),
        'view_item' => __('Voir un auteur(e)'),
        'search_items' => __('Rechercher un auteur(e)'),
        'not_found' => __('Aucun auteur trouvé'),
        'not_found_in_trash' => __('Aucun auteurs trouvé dans la corbeille')
      ),
      'public' => true,
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'auteur',
      'graphql_plural_name' => 'auteurs',
    )
  );
	
  add_post_type_support('auteur', array(
		'thumbnail',
    'excerpt'
  ));

  register_post_type('faq',
    array(
      'labels' => array(
        'name' =>  __('FAQ'),
        'singular_name' => __('FAQ'),
        'add_new' => __('Ajouter une question'),
        'add_new_item' => __('Ajouter une question'),
        'edit_item' => __('Modifier une question'),
        'new_item' => __('Nouvelle question'),
        'view_item' => __('Voir une question'),
        'search_items' => __('Rechercher une question'),
        'not_found' => __('Aucune question trouvée'),
        'not_found_in_trash' => __('Aucune question trouvée dans la corbeille')
      ),
      'public' => true,
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'faq',
      'graphql_plural_name' => 'faqs',
    )
  );

  register_post_type('lexique',
    array(
      'labels' => array(
        'name' =>  __('Lexique'),
        'singular_name' => __('Lexiques'),
        'add_new' => __('Ajouter un lexique'),
        'add_new_item' => __('Ajouter un lexique'),
        'edit_item' => __('Modifier un lexique'),
        'new_item' => __('Nouveau lexique'),
        'view_item' => __('Voir un lexique'),
        'search_items' => __('Rechercher un lexique'),
        'not_found' => __('Aucun lexique trouvé'),
        'not_found_in_trash' => __('Aucun lexique trouvé dans la corbeille')
      ),
      'public' => true,
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'lexique',
      'graphql_plural_name' => 'lexiques',
    )
  );

  add_post_type_support('lexique', array(
		'thumbnail'
  ));

  register_taxonomy('competence', 'auteur',
  array(
    'label' => 'Compétences',
    'labels' => array(
      'name' => 'Compétences',
      'singular_name' => 'Compétence',
    ),
    'hierarchical' => false,
    'show_in_graphql' => true,
    'graphql_single_name' => 'competence',
    'graphql_plural_name' => 'competences',
  ));

  register_post_type('formulaire',
    array(
      'labels' => array(
        'name' =>  __('Soumission de formulaire'),
        'singular_name' => __('soumission de formulaire'),
      ),
      'public' => true,
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'formulaire',
      'graphql_plural_name' => 'formulaires',
    )
  );

  register_taxonomy('type', 'formulaire',
  array(
    'label' => 'Type',
    'labels' => array(
      'name' => 'Types',
      'singular_name' => 'Type',
    ),
    'hierarchical' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'type',
    'graphql_plural_name' => 'types',
  ));

  register_graphql_mutation('createSubmission',[
    'inputFields' => [
      'type' => [
        'type' => 'String',
        'description' => 'Type du formulaire',
      ],
      'name' => [
        'type' => 'String',
        'description' => 'Nom du formulaire',
      ],
      'organization' => [
        'type' => 'String',
        'description' => 'Organisation du formulaire',
        'isNullable' => true,
      ],
      'email' => [
        'type' => 'String',
        'description' => 'Email du formulaire',
      ],
      'phone' => [
        'type' => 'String',
        'description' => 'Téléphone du formulaire',
        'isNullable' => true,
      ],
      'subject' => [
        'type' => 'String',
        'description' => 'Sujet du formulaire',
      ],
      'message' => [
        'type' => 'String',
        'description' => 'Message du formulaire',
      ],
      'country' => [
        'type' => 'String',
        'description' => 'Pays du formulaire',
        'isNullable' => true,
      ],
      'language' => [
        'type' => 'String',
        'description' => 'Langue du formulaire',
      ],
      'contact' => [
        'type' => 'String',
        'description' => 'Coordonnées de la personne a contacté',
        'isNullable' => true,
      ],
    ],  // inputFields
    'outputFields' => [
      'success' => [
        'type' => 'Boolean',
        'description' => 'Whether or not data was stored successfully',
        'resolve' => function($payload, $args, $context, $info) {
          return isset($payload['success']) ? $payload['success'] : false;
        }
      ],
      'data' => [
        'type' => 'String',
        'description' => 'Playload of submission fields',
        'resolve' => function($payload, $args, $context, $info) {
          return isset($payload['data']) ? $payload['data'] : null;
        }
      ],
    ],  // outputFields
    'mutateAndGetPayload' => function($input, $context, $info){

      if (!class_exists('ACF')) return [
        'success' => false,
        'data' => 'ACF plugin not found',
      ];

      $sanitized_data = [];
      $errors = [];
      $acceptable_fields = [
        'type' => 'field_6264448ecd34f',
        'name' => 'field_6264451ecd350',
        'organization' => 'field_62644539cd351',
        'email' => 'field_62644551cd352',
        'phone' => 'field_6264456dcd353',
        'subject' => 'field_626445a6cd354',
        'message' => 'field_62644633cd355',
        'country' => 'field_626643248f307',
        'language' => 'field_626643618f308',
        'contact' => 'field_62688db1ce20e',
      ];

      foreach ($acceptable_fields as $field_key => $acf_key) {
        if (!empty($input[$field_key])) {
          $sanitized_data[$field_key] = sanitize_text_field($input[$field_key]);
        } else {
          $errors[] = $field_key . ' was not filled out';
        }
      }

      if (!empty($errors)) {
        return [
          'success' => false,
          'data' => $errors,
        ];
      }

      $form_submission = wp_insert_post([
        'post_type' => 'formulaire',
        'post_status' => 'publish',
        'post_title' => $sanitized_data['subject'],
        'post_content' => $sanitized_data['message'],
      ], true);

      if (is_wp_error($form_submission)) return [
        'success' => false,
        'data' => $form_submission->get_error_message(),
      ];

      foreach ($acceptable_fields as $field_key => $acf_key) {
        update_field($acf_key, $sanitized_data[$field_key], $form_submission);
      }

      return [
        'success' => true,
        'data' => json_encode($sanitized_data),
      ];

    }
  ]);

}

// function create_grqphql_mutation(){

  

// }

add_action('init', 'create_custom_post_type');
// add_action('graphql_register_types', 'create_grqphql_mutation');