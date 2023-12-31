import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'
import { StepInfo } from './components/StepInfo'

const sampleData = {
  "steps": [
    {
      "boothes": [
        {
          "boothId": "Booth 1-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        }
      ]
    }, 
    {
      "boothes": [
        {
          "boothId": "Booth 2-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
        {
          "boothId": "Booth 2-2",
          "status": "idle",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
      ]
    },
    {
      "boothes": [
        {
          "boothId": "Booth 3-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
        {
          "boothId": "Booth 3-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
      ]
    },
  ]
}

function App() {
  const index2label = ["デザイン", "制作", "3Dプリンター"]

  const StepInfoArray = sampleData["steps"].map((elm, index) => {
    <StepInfo boothData={elm["boothes"]} stepLabel={index2label[index]} />
  })

  return (
    <>
      <MyHeader />
      { StepInfoArray }
    </>
  )
}

export default App
