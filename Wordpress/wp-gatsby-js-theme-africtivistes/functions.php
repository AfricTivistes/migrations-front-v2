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

}

add_action('init', 'create_custom_post_type');