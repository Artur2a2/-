import Image from "next/image";
import styles from ".//globals.css";

import { Card } from "@/components/card/Card";
import prisma from '../lib/prisma';


export default async function Home() {

    const cardList = await prisma.tabl2.findMany();
    

  return (
    <div className="html, body">


     <div className="container">
	
  /* Бекграунд */
  <div className="background-image" 
           style={{'--x': '-280', '--y':' 0', '--width': '2000', '--height': '5600'}}>
          <img src="../main_BG.png" alt="Фоновое изображение"/>
      </div>
  
  
  
  /* Шапка */
  
  <div className="text-element" 
           style={{'--x': '121', '--y': '30', '--font-size': '32', '--font-family': 'Arkship', '--font-color':' #1bb9f3'}}>
          Model Stream
      </div>
  
  <a className="button-element button2" 
          style={{'--x': '124', '--y': '5', '--width': '85', '--height': '16', '--font-family': 'AqumTwoSmallCaps', '--font-size': '14', 
    '--font-color': '#e9c68b', '--text-x': '0', '--text-y': '0'}}>
          <span className="button-text">Русский ▼</span>
      </a>
  
  <a className="button-element button2" 
          style={{'--x': '233', '--y': '5', '--width': '85', '--height': '16', '--font-family': 'AqumTwoSmallCaps', '--font-size': '14', 
    '--font-color': '#e9c68b', '--text-x': '0', '--text-y': '0'}}>
          <span className="button-text">Поддержка</span>
      </a>
  
  <a className="button-element button2" 
          style={{'--x': '430', '--y': '41', '--width': '175', '--height': '25', '--font-family': 'AqumTwoSmallCaps', '--font-size': '16', 
    '--font-color': '#e9c68b', '--text-x': '0', '--text-y': '0'}} href="#functions">
          <span className="button-text">Функции плагина ▼</span>
      </a>
  
  <a className="button-element button2" 
          style={{'--x': '635', '--y': '41', '--width': '195', '--height': '25', '--font-family': 'AqumTwoSmallCaps', '--font-size': '16', 
    '--font-color': '#e9c68b', '--text-x': '0', '--text-y': '0'}} href="#users">
          <span className="button-text">Наши пользователи ▼</span>
      </a>
  
  <a className="button-element button2" 
          style={{'--x': 870, '--y': 41, '--width': '140', '--height': '25', '--font-family': 'AqumTwoSmallCaps', '--font-size': '16', 
    '--font-color': '#e9c68b', '--text-x': '0', '--text-y': '0'}} href="#team"> 
          <span className="button-text">Разработчики ▼</span>
      </a>
  
  <a className="button-element button1" 
          style={{'--x': 1032, '--y': 20, '--width': '135', '--height': '45', '--font-family': 'AqumTwoSmallCaps', '--font-size': '20', 
    '--font-color': '#3a1218', '--text-x': '35', '--text-y': '9',  '--background-image': 'url("/button_1.png")'}}>
          <span className="button-text">Демо</span>
      </a>
  
  <a className="button-element button1" 
          style={{'--x': '1169', '--y': '20', '--width': '150', '--height': '46', '--font-family': 'AqumTwoSmallCaps', '--font-size': '20', 
    '--font-color': '#3a1218', '--text-x': '22', '--text-y': '9',  '--background-image': 'url("/button_2.png")'}} href="#subscriptions">
          <span className="button-text">Подписки</span>
      </a>
  
  
  
  /* Страница 1 */
  
  <div className="background-image new1" 
           style={{'--x': '313', '--y': '279', '--width': '330', '--height': '296'}}>
          <img src="../000.png" alt="Логотип"/>
      </div>
  
  <div className="text-element" 
           style={{'--x': '673', '--y': '365', '--font-size': '50', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    <center>
      <i> 
        AI плагин вашей <br />
        мечты
      </i>
    </center>
      </div>
  
  <a className="button-element button1" 
          style={{'--x': '760', '--y': '490', '--width': '135', '--height': '45', '--font-family': 'AqumTwoSmallCaps', '--font-size': '20', 
    '--font-color': '#3a1218', '--text-x': '35', '--text-y': '9',  '--background-image': 'url("/button_1.png")'}}>
          <span className="button-text">Демо</span>
      </a>
  
  <a className="button-element button1" 
          style={{'--x': '900', '--y': '490', '--width': '150', '--height': '46', '--font-family': 'AqumTwoSmallCaps', '--font-size': '20', 
    '--font-color': '#3a1218', '--text-x': '22', '--text-y': '9',  '--background-image': 'url("/button_2.png")'}} href="#subscriptions">
          <span className="button-text">Подписки</span>
      </a>
  
  
  
  /* Страница 2 */
  
  <div className="text-element" 
           style={{'--x': '0', '--y': '950'}} id="users">
      </div> /*Якорная ссылка*/
  
  <div className="background-image new1" 
           style={{'--x': '115', '--y': '980', '--width': '318', '--height': '319'}}>
          <img src="../002.png" alt="Нач. разработчик"/>
      </div>
  <div className="text-element" 
           style={{'--x': '505', '--y': '1000', '--font-size': '35', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Начинающие разработчики
      </div>
  <div className="text-element" 
           style={{'--x': '505', '--y': '1080', '--font-size': '28', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Плагин ускоряет работу, позволяя <br /> 
    не тратить время на поиск моделей и <br /> 
    изучение различных сайтов<br />
    по моделям.
      </div>
  
  <div className="background-image new1" 
           style={{'--x': '1016', '--y': '1403', '--width': '318', '--height': '319'}}>
          <img src="../003.png" alt="Нач. разработчик"/>
      </div>
  <div className="text-element" 
           style={{'--x': '505', '--y': '1415', '--font-size': '35', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Профессионалы
      </div>
  <div className="text-element" 
           style={{'--x': '505', '--y': '1495', '--font-size': '28', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Плагин ускоряет работу, <br />
    позволяя скачивать большое <br />
    количество моделей.
      </div>
  
  
  
  /* Страница 3 */
  
  <div className="text-element" 
           style={{'--x': '0', '--y': '1750'}} id="functions">
      </div> /*Якорная ссылка*/
  
  <div className="text-element" 
           style={{'--x': '225', '--y': '2190', '--font-size': '33', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    AI поиск
      </div>
  <div className="text-element" 
           style={{'--x': '110', '--y': '2290', '--font-size': '23', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
     <center>
    Технологии поиска <br />
    моделей с использованием AI <br />
    и расширенных фильтров.<br />
    </center>
      </div>
  
  <div className="text-element" 
           style={{'--x': 540, '--y': 2190, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    AI автооптимизация
      </div>
  <div className="text-element" 
           style={{'--x': 580, '--y': 2290, '--font-size': 23, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
     <center>
    Плагин автоматически <br />
    оптимизирует модель <br />
    по вашему желанию.<br />
    </center>
      </div>
  
  <div className="text-element" 
           style={{'--x': 990, '--y': 2190, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    AI объединение
      </div>
  <div className="text-element" 
           style={{'--x': 1015, '--y': 2290, '--font-size': 23, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
     <center>
    Плагин объединит <br />
    сегментированные <br />
    модели.  
    </center>
      </div>
  
  
  
  /* Страница 4 */
  
  <div className="text-element" 
           style={{'--x': '0', '--y': 2735}} id="team">
      </div> /*Якорная ссылка*/
  
  <div className="background-image new1" 
           style={{'--x': 113, '--y': 2772, '--width': 320, '--height': 320}}>
          <img src="../Artur.png" alt="Нач. разработчик"/>
      </div>
  <div className="text-element" 
           style={{'--x': 505, '--y': 2800, '--font-size': 35, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Артур, 24 года
      </div>
  <div className="text-element" 
           style={{'--x': 505, '--y': 2880, '--font-size': 28, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Бэкенд разработчик, <br />
    Любит кактусы, <br />
    Создал прототип<br />
    Model Stream.
      </div>
  
  <div className="background-image new1" 
           style={{'--x': 1016, '--y': 3197, '--width': 320, '--height': 320}}>
          <img src="../Alexei.png" alt="Нач. разработчик"/>
      </div>
  <div className="text-element" 
           style={{'--x': 505, '--y': 3215, '--font-size': 35, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Алексей, 19 лет
      </div>
  <div className="text-element" 
           style={{'--x': 505, '--y': 3295, '--font-size': 28, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Фронтэнд разработчик, <br />
    Любит есть пироги, <br />
    Довел Model Stream<br />
    до релизной версии.
      </div>
  
  
  /* Страница 5 */
  
  <div className="background-image new2" 
           style={{'--x': 194, '--y': 3713, '--width': 213, '--height': 212}}>
          <img src="../033.png" alt="Нач. разработчик"/>
      </div>
  <div className="text-element" 
           style={{'--x': 165, '--y': 4000, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Фариг Маттиас
      </div>
  <div className="text-element" 
           style={{'--x': 130, '--y': '4100', '--font-size': '23', '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
     <center>
    Мне понравился <br />
    поиск моделей с AI, <br />
    оцениваю плагин на 10/10!<br />
    </center>
      </div>
  
  <div className="background-image new2" 
           style={{'--x': 620, '--y': 3718, '--width': 213, '--height': 212}}>
          <img src="../031.png" alt="Нач. разработчик"/>
      </div>
  <div className="text-element" 
           style={{'--x': 560, '--y': 4000, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Андрей Максимов
      </div>
  <div className="text-element" 
           style={{'--x': 550, '--y': 4100, '--font-size': 23, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
     <center>
    Плагин сократил <br />
    мне целых 20 часов <br />
    только на одном проекте!<br />
    </center>
      </div>
  
  <div className="background-image new2" 
           style={{'--x': 1048, '--y': 3708, '--width': 213, '--height': 212}}>
          <img src="../030.png" alt="Нач. разработчик"/>
      </div>
  <div className="text-element" 
           style={{'--x': 1015, '--y': 4000, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
    Павел Баранов
      </div>
  <div className="text-element" 
           style={{'--x': 995, '--y': 4100, '--font-size': 23, '--font-family': 'Arkship', '--font-color': '#e9c68b'}}>
     <center>
    Ненавижу искать модели <br />
    по сайтам! Плагин <br />
    спас мои нервы.. 
    </center>
      </div>
  
  
  /* Страница 6 -- главное -- ПОДПИСКИ */
  
  
  <div className="text-element" 
           style={{'--x': '0', '--y': 4610}} id="subscriptions">
      </div> /*Якорная ссылка*/
  
  {/* <div className="text-element" 
           style={{'--x': 190, '--y': 4700, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    Базовый
      </div>
  <div className="text-element" 
           style={{'--x': 130, '--y': 4800, '--font-size': 19, '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    
    ✓ Поиск и загрузка моделей  <br />
    ×  AI объединение <br />
    ×  AI автооптимизация <br />
    
      </div>
  <a className="button-element button1" 
          style={{'--x': 190, '--y': 5280, '--width': 150, '--height': 46, '--font-family': 'AqumTwoSmallCaps', '--font-size': 20, 
    '--font-color': '#3a1218', '--text-x': 8, '--text-y': 9,  '--background-image': "url('/button_2.png')"}} href="/1"> 
          <span className="button-text">Подробнее</span>
      </a> */}
  
  
  {/* <div className="text-element" 
           style={{'--x': 645, '--y': 4700, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    Medium
      </div>
  <div className="text-element" 
           style={{'--x': 550, '--y': 4800, '--font-size': 19, '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    ✓ Поиск и загрузка моделей  <br />
    ✓ AI объединение <br />
    ×  AI автооптимизация <br />
      </div>
  <a className="button-element button1" 
          style={{'--x': 645, '--y': 5280, '--width': 150, '--height': 46, '--font-family': 'AqumTwoSmallCaps', '--font-size': 20, 
    '--font-color': '#3a1218', '--text-x': 8, '--text-y': 9,  '--background-image': "url('/button_2.png')"}} href="/1"> 
          <span className="button-text">Подробнее</span>
      </a> */}
  
      {
        cardList.map((item) => {
          return (<Card key={item.id}
            name={item.name}
            description={item.description}
            arrayOfStrings={item.adv.split('nn')}
            price={item.price}
            id={item.id}
          />)
        })

      }



  
      {/*  
  <div className="text-element" 
           style={{'--x': 1070, '--y': 4700, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    Advanced
      </div>
  <div className="text-element" 
           style={{'--x': '995', '--y': '4800', '--font-size': '19', '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    ✓ Поиск и загрузка моделей  <br />
    ✓ AI объединение <br />
    ✓ AI автооптимизация <br />
      </div>
  <a className="button-element button1" 
          style={{'--x': 1085, '--y': 5280, '--width': 150, '--height': 46, '--font-family': 'AqumTwoSmallCaps', '--font-size': 20, 
    '--font-color': '#3a1218', '--text-x': 8, '--text-y': 9,  '--background-image': "url('/button_2.png')"}} href="/1"> 
          <span className="button-text">Подробнее</span>
      </a>*/}
  </div>
    </div>
  )
}
