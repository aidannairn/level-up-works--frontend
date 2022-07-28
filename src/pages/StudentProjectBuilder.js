import Navbar from "../components/navbar/Navbar"
import UserDashboard from '../components/user-dashboard/UserDashboard'

const StudentProjectBuilder = () => {
  // START UserDashboard Items
  const learningObjectives = {
    sidebarHeading: 'Learning Objectives'
  }

  const instructions = {
    sidebarHeading: 'Instructions'
  }

  const videoTutorial = {
    sidebarHeading: 'Video Tutorial'
  }

  const createProject = {
    sidebarHeading: 'Create Project'
  }

  const submitProject = {
    sidebarHeading: 'Submit Project'
  }

  const bonusChallenge = {
    sidebarHeading: 'Bonus Challenge'
  }

  const takeTheQuiz = {
    sidebarHeading: 'Take The Quiz'
  }
  // END UserDashboard Items

  const userDashboardItems = [
    learningObjectives,
    instructions,
    videoTutorial,
    createProject,
    submitProject,
    bonusChallenge,
    takeTheQuiz
  ]

  return (
    <>
      <Navbar/>
      <UserDashboard items={userDashboardItems} />
    </>
  )
}

export default StudentProjectBuilder