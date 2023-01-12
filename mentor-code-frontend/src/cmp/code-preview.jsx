
export function CodePreview({ currCode }) {
  const { _id, title, description } = currCode

  return (
    <article className='code-preview-content'>
      {/* <p >{_id}</p> */}
      <p className='code-preview-title'>{title}</p>
      <p className='code-preview-description'>{description}</p>
    </article>
  )
}
