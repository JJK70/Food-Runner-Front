import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import Inventory from "../../components/Inventory/Inventory"
import * as inventoryService from '../../services/inventoryService'

const PizzaBuilder = (props) => {
  
  const location = useLocation()
  const [inventory, setInventory] = useState([])
  
  const handleChange = evt => {
    setInventory()
  }
  
  useEffect(() => {
    const fetchAllInventory = async () => {
      const inventoryData = await inventoryService.getAll()
      setInventory(inventoryData)
    }
    fetchAllInventory()
  },[])

  const handleSubmit = evt => {
    evt.preventDefault()
  }
  
  return (
    <>
        <Inventory inventory={inventory} />
		</>
  )
}

export default PizzaBuilder