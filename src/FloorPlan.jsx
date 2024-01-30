import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"


function FloorPlan() {
  return (
    <>
      <Bedroom details={1} />
      <Kitchen />
      <Bath  details={{size: 'Full Bath'}}/>
      <Bedroom details={2} />
      <Bath  details={{size: 'Half Bath'}}/>
      <Bedroom details={3} />
      
    </>
  )
}

export default FloorPlan