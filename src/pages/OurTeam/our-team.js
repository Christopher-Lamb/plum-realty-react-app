import CSS from "./our-team.module.css";
import Navbar from "../../components/Navbar/Navbar";
import TeamMember, { TeamContainer } from "../../components/TeamMember/TeamMember";
import TeamArr from "../../config/plumPeople.json";
import Header from "../../components/Header";

export default function OurTeam() {
  return (
    <div className={CSS.container}>
      <Navbar />
      <Header>Our Team</Header>
      <TeamContainer array={TeamArr} />
    </div>
  );
}
