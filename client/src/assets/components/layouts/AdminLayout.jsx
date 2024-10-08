import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Card, Row, Col } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import "./AdminLayout.scss";

const { Sider, Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider className="sidebar" width={180}>
        <div className="sidebar-title text-white ps-7 pt-5 ">Admin Panel</div>
        <Menu theme="dark" mode="inline" className="mt-20">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="users">Users</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />}>
            <Link to="messages">Contacts</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />}>
            <Link to="stats">Statistics</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="content">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Users" bordered={false} className="stat-card">
                <p>120 Active Users</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Messages" bordered={false} className="stat-card">
                <p>45 New Messages</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Sales" bordered={false} className="stat-card">
                <p>$3,200 Revenue</p>
              </Card>
            </Col>
          </Row>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
