import PageDescription from "@/components/PageDescription"
import {Grid, Button, Chip, Stack} from "@mui/material"
import { useRouter } from "next/router";
import ProjectItem from "@/components/ProjectItem";
import ContactUs from "@/components/ContactUs";
import Maps from "@/components/Maps";


export default function Landing ({projects, skills}){
    const router = useRouter();
    return (
    <section>
        <PageDescription
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus sem, ultricies ac eleifend tincidunt, efficitur congue nisi. In semper lectus nec tellus porta, sit amet vehicula dui laoreet. "
        />
        
        {projects.map(project => (
                <ProjectItem key={project._id} project={project} />
                ))}

        <PageDescription
            title="Services"
        />
        <Grid container spacing={6}>
            <Grid item md={4}>
                        <h2>Expertise</h2>
                        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                            {skills.map((skill) => (
                                <Chip key={skill} label={skill} />
                                ))}
                        </Stack>
                    </Grid>
            <Grid item md={4}>
                <h2>Get to know me!</h2>
                <p>Etiam ultricies nunc a turpis consequat ultrices.</p>
                <Button 
                variant="contained" 
                size="large" 
                onClick={() => router.push("/contact")}
                >
                    Phasellus et gravida ex
                </Button>
            </Grid>

            <Grid item md={4}>
                <h2>Evolving!</h2>
                <p>Vivamus ullamcorper turpis et tempus dictum.</p>
                <Button 
                variant="contained" 
                size="large" 
                onClick={() => router.push("/contact")}
                >
                    New things
                </Button>
            </Grid>
        </Grid>

        <PageDescription
            title="Maps"
        />
        <Maps/>

    <PageDescription
            title="Contact us"
        />
    <ContactUs/>
    </section>
    );
}

export async function getServerSideProps(){
    let projects = [
        {
            _id: 1,
            name: "Lorem Ipsum",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus sem, ultricies ac eleifend tincidunt, efficitur congue nisi. In semper lectus nec tellus porta, sit amet vehicula dui laoreet.",
            imageUrl:
            "https://www.deere.com.mx/assets/images/region-3/products/tractors/large/7j-series/7200j/trator_7200j_estudio2_large_5ce1b4b8948c9625c90040df279c69d10f4b014c.png",
        },
        {
            _id: 2,
            name: "Ipsum Lorem",
            description:
            "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
            imageUrl:
            "https://www.deere.com/assets/images/region-3/products/tractors/heavy-tractors/tractor-8270r-estudio.png",
        },
    ];
    let skills = [];


    return{
        props: {
            projects,
            skills: ["Java", "C", "Assembler", "SQL", "Robotics", ".NET", "PHP"],
        },
    };
}