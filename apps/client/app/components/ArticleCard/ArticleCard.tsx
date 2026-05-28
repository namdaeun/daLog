import Tag from '../Tag/Tag';
import * as s from './styles.css';

interface ArticleCardProp {
  title: string;
  image: string;
  tagName: string;
}

const ArticleCard = ({ title, image, tagName }: ArticleCardProp) => {
  return (
    <article className={s.articleStyle}>
      <img src={image} className={s.imgStyle} alt="아티클 썸네일" />
      <div className={s.contentStyle}>
        <h1 className={s.titleStyle}>{title}</h1>
        <div className={s.tagContainer}>
        {
          tagName.split(',').map((tagName) => (
            <Tag size="sm" key={tagName}>{tagName.trim()}</Tag>
          ))
        }
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
