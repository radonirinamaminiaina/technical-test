/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { memo } from 'react';
import CardBackIcon from './icons/CardBackIcon';
import CardShopIcon from './icons/CardShopIcon';
import './styles.css';

/**
 * This component represents a preview of an item, the target output is an HTML markup that looks like /images/card.png
 * See `/cards` page for the output
 *
 * @todo:
 * - setup the HTML markup by replacing <img /> below by yours
 * - put and set all necessary css as you want in ./styles.css the main entry class is `preview-card`
 *
 * you can find all assets to use in /public/images and /public/icons
 */
function CardPreview() {
  return (
    <div className="preview-card">
      <div className='preview-card__upper'>
        <div className='preview-card__header horizontal-padding'>
          <Link href="" className='preview-card__back'>
            <CardBackIcon />
          </Link>
          <Link href="" className='preview-card__shop with-item'>
            <CardShopIcon />
          </Link>
        </div>
        <div className='preview-card__info horizontal-padding'>
          <div className='preview-card__info-item'>
            <h3>Platform</h3>
            <p>PS5</p>
          </div>
          <div className='preview-card__info-item'>
            <h3>Release</h3>
            <p>Fall 2020</p>
          </div>
          <div className='preview-card__info-item'>
            <h3>Price</h3>
            <p>$50</p>
          </div>
        </div>
        <figure className='preview-card__img'>
          <img src="/images/ps5.png" />
        </figure>
      </div>
    </div>
  );
}

export default memo(CardPreview);
