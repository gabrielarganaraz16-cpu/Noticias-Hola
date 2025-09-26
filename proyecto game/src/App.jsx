import Button from "./Button";
import GradientText from './GradientText.jsx'
import RollingGallery from './RollingGallery.jsx'
import CircularGallery from './CircularGallery.jsx'
  



export default function MyApp() {
  return (

    <main className="">
    

    <div className="bg-[url(https://pxbcdn.elchubut.com.ar/chubut/102024/1728491932947.jpg?cw=723&ch=405&extw=a)] bg-fixed">
   <div class="absolute top-0 left-0 h-full w-[48px] z-10"   ></div>
    <RollingGallery autoplay={true} pauseOnHover={true} />
 <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class text-6xl">
  TURISMO ESQUEL
</GradientText>

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
 <div className="ml-10 mt-10 h-100 w-2/5 bg-cover bg-[url(https://www.patagonia.com.ar/media/imagenes/chubut/esquel/trochita9.jpg)]"></div>
<div className=" text-emerald-400 bg-blue-500 w-max mt-5 ml-10 text-3xl">Sé parte de la historia con La Trochita</div>
<br />
<div className=" text-emerald-400 bg-blue-500 block w-max ml-10">Desde hace más de 70 años, el Viejo Expreso Patagónico recorre nuestros paisajes con su porte inconfundible. ¡Reservá tu lugar a bordo!</div>
<Button link="https://www.esquel.tur.ar/disfruta/excursiones-aventura/expreso-patagonico"/>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
<br />
<div className="ml-10 mt-10 h-100 w-4/8 bg-cover bg-[url(https://www.interpatagonia.com/paseos/cabalgata-esquel/cabalgata-1.jpg)]"></div>
<br />
<div className="text-emerald-400 bg-blue-500 w-max mt-5 ml-10 text-3xl">Cabalgatas con el espíritu de los pioneros</div>
<br />
<div className="text-emerald-400 bg-blue-500 block w-max ml-10">Alrededor de Esquel, cerros y valles te invitan a recorrerlos como los antiguos pioneros, con verdaderos guías baqueanos.</div>
<Button link="https://www.esquel.tur.ar/disfruta/excursiones-aventura/cabalgatas"/>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
<br />
<div className="ml-10 mt-10 h-100 w-4/8 bg-cover bg-[url(https://fronterasur.com/wp-content/themes/yootheme/cache/5b/galciar-torrecillas-5b5f8912.jpeg)]"></div>
<div className="text-emerald-400 bg-blue-500 w-max mt-5 ml-10 text-3xl">Explorá hasta llegar a los pies de un glaciar</div>
<br />
<div className="text-emerald-400 bg-blue-500 block w-max ml-10">El Glaciar Torrecillas te espera en el corazón del Parque Nacional Los Alerces. Navegación y trekking se combinan en esta salida fantástica.</div>
<Button link="https://www.esquel.tur.ar/disfruta/excursiones-aventura/trekking-al-glaciar-torrecillas"/>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
<br />
<div className="ml-10 mt-10 h-100 w-4/8 bg-cover bg-[url(https://kilometros.com.ar/wp-content/uploads/2019/12/Kayak-Rio-Azul.jpg)]"></div>
<div className="text-emerald-400 bg-blue-500 w-max mt-5 ml-10 text-3xl">Remá en los ríos de la Cordillera de los Andes</div>
<br />
<div className="text-emerald-400 bg-blue-500 block w-max ml-10">Ubicado al Sur de Esquel, el Corcovado es un río impetuoso, perfecto para disfrutar del rafting durante los meses de verano.</div>
<Button link="https://www.esquel.tur.ar/disfruta/excursiones-aventura/rafting"/>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
<br />
<div className="ml-10 mt-10 h-100 w-4/8 bg-cover bg-[url(https://elbolsontrekking.com/wp-content/uploads/2020/06/piedra-parada-790x494.jpg)]"></div>
<div className="text-emerald-400 bg-blue-500 w-max mt-5 ml-10 text-3xl">En las entrañas del volcán</div>
<br />
<div className="text-emerald-400 bg-blue-500 block w-max ml-10">Piedra Parada es un momento natural inigualable, ubicado a orillas del Río Chubut, es parte de un volcán gigante que hizo erupción hace millones de años.</div>
<Button link="https://www.esquel.tur.ar/disfruta/excursiones-aventura/piedra-parada"/>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
<br />
<div className="ml-10 mt-10 h-100 w-4/8 bg-cover bg-[url(https://merakisur.com/wp-content/uploads/2024/01/tuneles_de_hielo_03-1.jpg)]"></div>
<div className="text-emerald-400 bg-blue-500 w-max mt-5 ml-10 text-3xl">Los misteriosos túneles de hielo</div>
<br />
<div className="text-emerald-400 bg-blue-500 block w-max ml-10">Los elementos de la naturaleza se combinan de una forma especial para crear estos túneles de hielo, ahora podés verlos en video.</div>
<Button link="https://www.esquel.tur.ar/disfruta/excursiones-aventura/tuneles-de-hielo-4x4"/>
<br />
</div>
    </main>
  );
}

