import React from "react"
import { StyleSheet, css } from "aphrodite"
import { defaultConfig } from "./configs"
import { getStyles } from "./getStyles"
function StarterBlock(props) {
  // the blog posts are now available as props.data
  const { data = [] } = props
  // Pass the style object returned by `getStyles()` to aphrodite's `StyleSheet.create()`.
  const styles = StyleSheet.create(getStyles(props))
  return (
    <React.Fragment>
      <h1>{props.text}</h1>
      <ul>
        {data.map((blog) => {
          return (
            <li key={blog.id}>
              {/* add the aphrodite class to your rendered HTML. */}
              <a href={`/blog/${blog.id}`} className={css(styles.blogLink)}>
                {blog.title}
              </a>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}
StarterBlock.defaultProps = defaultConfig
export default StarterBlock
