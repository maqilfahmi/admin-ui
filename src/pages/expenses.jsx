import React from 'react'
import Card from '../components/Elements/Card';
import MainLayout from '../components/Layouts/MainLayout';
import { Container, Row, Col } from 'react-bootstrap';
    
const ExpensesPage = () => {
  return (
    <MainLayout type="expenses">
      <Container className="mt-4">

        {/* Expenses Comparison Section */}
        <div className="expenses-comparison mb-4">
          <h5>Expenses Comparison</h5>
          <Row>
            <Col>
              <Card
                title="Comparison Data"
                content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
              />
            </Col>
          </Row>
        </div>

        {/* Expenses Breakdown Section */}
        <div className="expenses-breakdown">
          <h5>Expenses Breakdown</h5>
          <Row className="g-3">
            <Col md={4} className="expense-card">
              <Card title="Expense 1" content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni neque quam alias enim ullam deserunt ducimus." />
            </Col>
            <Col md={4} className="expense-card">
              <Card title="Expense 2" content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni neque quam alias enim ullam deserunt ducimus." />
            </Col>
            <Col md={4} className="expense-card">
              <Card title="Expense 3" content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni neque quam alias enim ullam deserunt ducimus." />
            </Col>
            <Col md={4} className="expense-card">
              <Card title="Expense 4" content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni neque quam alias enim ullam deserunt ducimus." />
            </Col>
            <Col md={4} className="expense-card">
              <Card title="Expense 5" content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni neque quam alias enim ullam deserunt ducimus." />
            </Col>
            <Col md={4} className="expense-card">
              <Card title="Expense 6" content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni neque quam alias enim ullam deserunt ducimus." />
            </Col>
          </Row>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ExpensesPage;