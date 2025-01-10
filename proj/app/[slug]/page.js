import Image from "next/image";
import styles from "../globals.css";
import { Card } from "@/components/card/Card";
import prisma from '@/lib/prisma';

export async function generateStaticParams() {
    const cards = await prisma.tabl2.findMany();
   
    return cards.map((card) => ({
      slug: card.id,
    }))
}

export default async function Sub1({ params }) {
    const slug = (await params).slug;
    const card = await prisma.tabl2.findFirst({
        where: {
            id: slug
        }
    })
    var arrayOfStrings = card.adv.split('nn');

  return (
    <div className="html, body">
     <div className="container subscriptions">
	
    /* Бекграунд */
    <div className="background-image" 
         style={{'--x': -280, '--y': 0, '--width': 2000, '--height': 935}}>
        <img src="/123.png" alt="Фоновое изображение"/>
    </div>
    
    
    /* Шапка */
    
    <div className="text-element" 
         style={{'--x': 121, '--y': 30, '--font-size': 32, '--font-family': 'Arkship', '--font-color': '#1bb9f3'}}>
        Model Stream
    </div>
    
    <a className="button-element button2" 
        style={{'--x': 124, '--y': 5, '--width': 85, '--height': 16, '--font-family': 'AqumTwoSmallCaps', '--font-size': 14, 
        '--font-color': '#e9c68b', '--text-x': 0, '--text-y': 0}}>
        <span className="button-text">Русский ▼</span>
    </a>
    
    <a className="button-element button2" 
        style={{'--x': 233, '--y': 5, '--width': 85, '--height': 16, '--font-family': 'AqumTwoSmallCaps', '--font-size': 14, 
        '--font-color': '#e9c68b', '--text-x': 0, '--text-y': 0}}>
        <span className="button-text">Поддержка</span>
    </a>
    
    <a className="button-element button2" 
        style={{'--x': 60, '--y': 25, '--width': 32, '--height': 27, '--font-family': 'AqumTwoSmallCaps', '--font-size': 28, 
        '--font-color': '#e9c68b', '--text-x': 0, '--text-y': -7}} href="/">
        <span className="button-text">🡸</span>
    </a>
    
    
    
    
    
    /* ИНФО О ПОДПИСКЕ */
    
    
    <div className="text-element" 
         style={{'--x': 124, '--y': 100, '--font-size': 26, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
        {card.name}
    </div>
    
    
    
    
    <div className="text-element" 
         style={{'--x': 124, '--y': 160, '--font-size': 21, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
        {card.description}
    </div>
    
    
    
    <div className="text-element" 
         style={{'--x': 600, '--y': 500, '--font-size': 21, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
        {arrayOfStrings[0]}<br />
        {arrayOfStrings[1]}<br />
        {arrayOfStrings[2]}<br />
        {arrayOfStrings[3]}
    </div>

    <div className="text-element" 
         style={{'--x': 600, '--y': 680, '--font-size': 21, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
        {card.price}
    </div>
    
    <a className="button-element button1" 
        style={{'--x': 600, '--y': 610, '--width': 150, '--height': 46, '--font-family': 'AqumTwoSmallCaps', '--font-size': 20, 
        '--font-color': '#3a1218', '--text-x': 5, '--text-y': 9,  '--background-image': "url('/button_2.png')"}}>
        <span className="button-text">Подписаться</span>
    </a>
    
</div>
    </div>
  )
}
