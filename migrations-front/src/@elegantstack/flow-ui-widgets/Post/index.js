import loadable from '@loadable/component'

export { PostBody } from './Post.Body'
export { ArticleBody } from './Article.Body'
export { PostFooter } from './Post.Footer'
export { ArticleFooter } from './Article.Footer'
export { PostHead } from './Post.Head'
export { PostImage } from './Post.Image'
export { PostTags } from './Post.Tags'
export { PostTagsShare } from './Post.Tags.Share'

export const PostComments = loadable(() =>
  import(/* webpackPrefetch: true */ './Post.Comments')
)
export const PostCommentsFacebook = loadable(() =>
  import(/* webpackPrefetch: true */ './Post.Comments.Facebook')
)
export const PostCommentsGraph = loadable(() =>
  import(/* webpackPrefetch: true */ './Post.Comments.Graph')
)
export const PostShare = loadable(() =>
  import(/* webpackPrefetch: true */ './Post.Share')
)
