import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from "remark-gfm"
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import styles from "./Markdown.module.scss"
export default function Markdown(props) {
  
    const MarkdownComponents = {
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={oneDark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }
  
    return (<div className={styles.contentDiv}>
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>
          {props.content}
        </ReactMarkdown>
    </div>);
  }
  