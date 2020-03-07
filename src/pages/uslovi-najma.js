import React, { Component } from "react"
import { withFirebase } from "../withFirebase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "antd"
import Audi_Photo from "../assets/images/audia4.jpg"
import golf_Photo from "../assets/images/golf.jpg"
import renault_Photo from "../assets/images/renault.jpg"
import aboutUs from "../assets/images/about-us.jpg"
import Footer from "../components/footer"
import "antd/dist/antd.css"

class Uslovi extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Uslovi Najma Vozila" />
        <div className="conditional container">
          <h2>Osnovni uslovi za najam rent a car vozila</h2>
          <p>
            Vozilo mogu iznajmiti osobe starije od 23 godine koje poseduju
            vozačku dozvolu najmanje 2. godine.
          </p>
          <p>Iznajmljeno vozilo ne sme biti upotrebljavano:</p>
          <ul>
            <li>
              - pod uticajem alkohola, sredstava za umirenje, narkotika,
              sredstava za spavanje ili drugih lekova;
            </li>
            <li>
              - u protivzakonite svrhe (npr. krivična dela, carinski i devizni
              prekršaji...);
            </li>
            <li>- za plaćeni prevoz putnika ili robe;</li>
            <li></li>
            <li>- za bilo koje takmičenje, brzinske probe ili trke;</li>
            <li>
              - za pogon ili vuču drugih vozila, prikolica ili bilo kog
              predmeta;
            </li>
            <li>- kada nije u voznom stanju;</li>
            <li>- za obuku vozača.</li>
          </ul>
          <p>Korisnik usluga je obavezan:</p>
          <ul>
            <li>
              - da iznajmljeno vozlio ne optereti osobama ili predmetima preko
              dozvoljene težine;
            </li>
            <li>
              - da iznajmljenim vozilom ne prelazi granicu SCG bez dozvole BEL
              rent a car-a;
            </li>
            <li>- da snosi troškove utrošenog goriva;</li>
            <li>
              - da za produženje ugovorenog perioda korišćenja vozila traži
              saglasnost BEL rent a car-a 48 sati pre isteka roka vraćanja
              vozila;
            </li>
            <li>
              - da odmah obustavi vožnju ako se za vreme korišćenja pokvari
              brojač kilometara i o kvaru brojača najbržim putem obavesti BEL
              rent a car;
            </li>
            <li>
              - da, ukoliko se prilikom vraćanja vozila ustanovi da je brojač
              kilometara oštećen, plati BEL rent a car-u iznos troškova za 500
              kilometara za svaki dan korišćenja vozila;
            </li>
            <li>- da vozilo uredno održava i čuva za vreme korišćenja;</li>
            <li>
              - da iznajmljeno vozilo vrati u dogovorenom roku ili ranije na
              zahtev BEL rent a car-a;
            </li>
            <li>
              - da vozilo koristi samo za vlastite potrebe i da ga ne iznajmi
              ili posudi trećem licu;
            </li>
            <li>
              - da plati sve iznose novčanih kazni izrečenih protiv njega u vezi
              korišćenja vozila, a prouzrokovane njegovom ličnom krivicom
              (kršenje saobraćajnih propisa);
            </li>
            <li>
              - da u slučaju nezgode štiti interese BEL rent a car-a i njegovog
              osiguravajućeg društva time:
            </li>
            <li>
              - što će zabeležiti imena i adrese učesnika i svedoka nezgode;
            </li>
            <li>
              -- što neće napustiti oštećeno vozilo dok ga nije sklonio sa mesta
              nezgode i osigurao;
            </li>
            <li>
              -- što će o šteti, čak i kada je neznatna, odmah najbržim putem
              obavestiti BEL rent a car;
            </li>
            <li></li>
            <li>
              -- što će u slučaju većeg oštećenja na vozilu ili ako u nezgodi
              ima povređenih lica (čak i kada je očigledna krivica drugih lica)
              odmah pozvati i sačekati dolazak organa saobraćajne milicije radi
              izvršenja službenog uviđaja;
            </li>
            <li>
              -- što će podneti pismeni izveštaj o nezgodi BEL rent a car-u.
            </li>
          </ul>
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default Uslovi
