import React from 'react'

export const ArticleBody = ({ body }) => (
    <div dangerouslySetInnerHTML={{ __html: body }} />
)
