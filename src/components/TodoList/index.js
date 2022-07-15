import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { todoRemainingSelector } from "../../redux/selectors";
import TodosSlide from "./todosSlide";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      TodosSlide.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  const handleChangeTodo = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.length > 0 ? (
          todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              completed={todo.completed}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>No todos yet</h1>
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleChangeTodo} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
