import styles from "@/components/card/card.module.css";
import Link from "next/link";

export const Card = ({id, name, description, arrayOfStrings, price }) => {
var x = 1
  switch (id) {
    case '1': x = 880; break;
    case '2': x = 425; break;
    case '3': x = 0; break;}
  


  return (
    <div>

      <div className="text-element" 
           style={{'--x': 1070-x, '--y': 4700, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    {name ?? "Товар"}
      </div>
  <div className="text-element" 
           style={{'--x': 995-x, '--y': '4800', '--font-size': '19', '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    {arrayOfStrings[0]}<br />
        {arrayOfStrings[1]}<br />
        {arrayOfStrings[2]}<br />
        {arrayOfStrings[3]}
      </div>

      <div className="text-element" 
           style={{'--x': 1050-x, '--y': 5000, '--font-size': 33, '--font-family': 'Arkship', '--font-color': '#3a1218'}}>
    <span>{price ?? "-1"}</span> $
      </div>



  <Link className="button-element button1" 
          style={{'--x': 1085-x, '--y': 5180, '--width': 150, '--height': 46, '--font-family': 'AqumTwoSmallCaps', '--font-size': 20, 
    '--font-color': '#3a1218', '--text-x': 8, '--text-y': 9,  '--background-image': "url('/button_2.png')"}} href={`/${id}`}> 
          <span className="button-text">Подробнее</span>
      </Link>
  </div>
    




  );
};
