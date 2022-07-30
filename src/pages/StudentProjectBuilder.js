import { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from "../components/navbar/Navbar"
import UserDashboard from '../components/user-dashboard/UserDashboard'

const StudentProjectBuilder = () => {
  const [projectIndex, setProjectIndex] = useState(1)
  const [project, setProject] = useState(null)

  const { REACT_APP_API_URL: url } = process.env

  useEffect(() => {
    axios.get(`${url}/student-project-builder/${projectIndex}`)
    .then(res => setProject(res.data))
  }, [])

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