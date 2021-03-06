import React, { useEffect } from 'react'
import { Row, Container, Form } from 'react-bootstrap'
import ItemCard from '../components/ItemCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../store/actions/productActions'
import { listCategory } from '../store/actions/categoryActions'
import Loader from '../components/Loader'

const ShopPage = () => {
  const { shopId } = useParams()
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector(
    (state) => state.productListReducer
  )
  const { categories } = useSelector((state) => state.categoryListReducer)

  useEffect(() => {
    dispatch(listProduct(shopId))
    dispatch(listCategory(shopId))
  }, [])

  function handleCategoryOnChange(e) {
    const categoryId = e.target.value
    dispatch(listProduct(shopId, categoryId))
    console.log(categoryId)
  }

  return (
    <Container fluid className='pt-5'>
      <h4 className='mt-5'>Our Products</h4>

      <Form.Control
        className='w-100 mt-1'
        as='select'
        name='category_id'
        onChange={handleCategoryOnChange}
      >
        <option value=''>Select Category</option>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            )
          })}
      </Form.Control>

      {!products.length && <Loader />}

      <Row>
        {products &&
          products.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))}
      </Row>
    </Container>
  )
}

export default ShopPage
