import React, {Component} from 'react';
import Article from "../components/Article"

const Featured = () => {
  const Articles = [
    "Fortunella margarita (Lour.) Swingle",
    "Entolasia Stapf",
    "Lessingia leptoclada A. Gray",
    "Richardia tricocca (Torr. & A. Gray) Standl.",
    "Couroupita Aubl.",
    "Microcitrus australasica (F. Muell.) Swingle",
    "Maurandella (A. Gray) Rothm.",
    "Tridens flavus (L.) Hitchc. var. flavus",
    "Townsendia gypsophila T.K. Lowrey & P.J. Knight",
    "Sauvagesia erecta L.",
    "Macradenia lutescens R. Br.",
    "Solidago canadensis L. var. canadensis",
    "Arthrostylidium Rupr.",
    "Baccharis pteronioides DC.",
    "Ranunculus andersonii A. Gray",
    "Encephalartos woodii Sander",
    "Caulanthus glaucus S. Watson",
    "Hygrohypnum molle (Hedw.) Loeske",
    "Erigeron cascadensis A. Heller",
    "Lyonia rubiginosa (Pers.) G. Don var. stahlii (Urb.) W.S. Judd",
  ].map((title, i) => <Article title={title} key={i}/>);

  const adText = [
    "harness intuitive infomediaries",
    "expedite turn-key technologies",
    "benchmark interactive infomediaries",
    "e-enable magnetic initiatives",
    "streamline interactive channels",
  ];

  const randomAd = adText[Math.round(Math.random()*(adText.length-1))];

  return (
    <div className="container-fluid">
      <div className="col-xs-12 well text-center">
        {randomAd}
      </div>
      <div className="row">
        {Articles}
      </div>
    </div>
  );
};

export default Featured;
