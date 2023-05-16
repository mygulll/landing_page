import { useRouter } from "next/router";
import { Button } from "@mui/material";
import styles from "../styles/Home.module.css"
export default function Home({name, summary}) {
  const router = useRouter();
  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>Hello {name}</h1>
      <div className={styles.Summary}>{summary}</div>
    <div>
      <Button 
      variant="contained" 
      size="large" 
      onClick={() => router.push("/contact")}
      >
        Apachurrame
      </Button>
    </div>
    </section>
  );
}


export async function getStaticProps (){
  //console.log("Running in the server");
  //Get your data from an API
  return{
    props: {
      name: "Lorem Ipsum",
      summary: "Donec quis condimentum eros. Aenean interdum ante id ipsum luctus, a vestibulum massa aliquet. Suspendisse eget risus facilisis, efficitur nunc vitae, tristique nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque nec mauris ex."
    },
  };
}