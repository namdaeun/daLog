import * as styles from './styles.css';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <div
      className={styles.markdownContent}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Content is sanitized server-side
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MarkdownContent;
