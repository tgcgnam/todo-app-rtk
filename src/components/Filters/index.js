import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FiltersSlide from "./filtersSlide";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("All");
  const [searchPriority, setSearchPriority] = useState([]);
  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(FiltersSlide.actions.searchFilterChange(e.target.value));
  };

  const handleSearchStatus = (e) => {
    setSearchStatus(e.target.value);
    dispatch(FiltersSlide.actions.searchStatusChange(e.target.value));
  };

  const handleSearchPriority = (value) => {
    setSearchPriority(value);
    dispatch(FiltersSlide.actions.searchPriorityChange(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={handleSearchText}
          value={searchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchStatus} onChange={handleSearchStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={searchPriority}
          onChange={handleSearchPriority}
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
      </Col>
    </Row>
  );
}
