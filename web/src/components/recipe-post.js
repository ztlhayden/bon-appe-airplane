import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './recipe-post.module.css'

function RecipePost (props) {
  const {_rawSteps, authors, categories, title, mainImage, publishedAt, _rawEquipment, cooktime, preptime, _rawIngredients} = props
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.prepContent}>
              <div className={styles.time}>
                <p>Prep Time: {preptime}{console.log(preptime, title)}</p>
                <p>Cook Time: {cooktime}</p>
              </div>
              <div className={styles.equipment}>
                <h2>Equipment</h2>
                {_rawEquipment && <PortableText blocks={_rawEquipment} />}
              </div>
              <div className={styles.ingredients}>
                <h2>Ingredients</h2>
                {_rawEquipment && <PortableText blocks={_rawIngredients} />}
              </div>
            </div>
            <h2>Steps</h2>
            {_rawSteps && <PortableText blocks={_rawSteps} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default RecipePost
