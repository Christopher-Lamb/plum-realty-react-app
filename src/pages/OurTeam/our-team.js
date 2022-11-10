import CSS from "./our-team.module.css";
import Navbar from "../../components/Navbar/Navbar";
import TeamMember, { TeamContainer } from "../../components/TeamMember/TeamMember";
import TeamArr from "../../config/plumPeople.json";

export default function OurTeam() {
  return (
    <div className={CSS.container}>
      <Navbar />
      <TeamContainer array={TeamArr} />
    </div>
  );
}
