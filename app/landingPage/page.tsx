import Footer from "../components/blank/blank";
import PostCard from "../components/card/card";
import FilterBar from "../components/filter/filter";
import Navbar from "../components/navbar/navbar";
import style from "./landing.module.css";

export default function Landing() {
  return (
    <div className={style.dflex}>
      <Navbar />

      <div className={style.threefourths}>
        <FilterBar></FilterBar>
        <PostCard
          title="Looking for skilled Mobile Legends Players"
          author="AduG Organization"
          votes={80}
          message="Hi, we are now recruiting for tryouts in our Mobile Legends team. Requirements must be; At least epic rank, has stable internet at their homes, able to invest time at a moment's notice and a sportmanship like behavior. Those who want to join us meet us at the ADUG Office in SV Building, Sali na Klasmeyt!"
        />
        <PostCard
          title="Free I love Math! T-shirt"
          author="ACOMSS"
          votes={50}
          message="Get your free I love Math T-shirt now!. All members of ACOMSS during the school year of 2023-2024 gets a free Math T-shirt, claim it now at the ACOMSS Office!"
        />
        <PostCard
          title="Battle of the Bands starts now!"
          author="HIMIG"
          votes={69}
          message="Registration for the Battle of the Bands starts at 12/11/2023! Register now to claim your free guitar pick!"
        />
        <PostCard
          title="Blast Through The Past!"
          author="PASADU"
          votes={200}
          message="Claim your tickets now for the upcoming PASADU exclusive historical film of General Luna! Tickets sold at PASADU Office"
        />
        <PostCard
          title="Recruiting Members as ACOES Officers, sign up now!"
          author="ACOES"
          votes={15}
          message="All students looking to sign up, meet us at the ACOES Office! we'll see you there klasmeyt!"
        />
      </div>
      <div className={style.onefourth}>
        <Footer />
        <Footer />
      </div>
    </div>
  );
}
