import React, { useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Button,
  Space,
  Pagination,
  Spin,
  Dropdown,
  MenuProps,
  Radio,
} from "antd";
import { BellOutlined, UserOutlined, DownloadOutlined, HeartOutlined, PlusOutlined } from "@ant-design/icons";
import {  useSearchImagesQuery } from "./features/un-splash/fetchImages";
import "./App.scss";
const UNSPLASH_API_KEY = "TxFsNcgGceFHjzLfIjYAui_JdTQzh0SsdIPTm21g-yM";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<any>({
    pageNumber: 1,
    limit: 30,
    search: "random",
  });
  
  const { data = [], isFetching, error } = useSearchImagesQuery(query);

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        Stats
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        Account Settings
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        Logout
      </a>
    ),
  },
];

  const menuItems: MenuItem[] = [
    getItem("Editorial", "1"),
    getItem("Following", "2"),
    getItem("Wallpapers", "3"),
    getItem("3D Renders", "4"),
    getItem("Travel", "5"),
    getItem("Nature", "6"),
    getItem("Street Photography", "7"),
    getItem("Experimental", "8"),
    getItem("Textures & Patterns", "9"),
    getItem("Animals", "10"),
    getItem("Architecture & Interiors", "11"),
    getItem("Fashion & Beauty", "12"),
    getItem("Film", "13"),
    getItem("Food & Drink", "14"),
    getItem("People", "15"),
    getItem("Spirituality", "16"),
    getItem("Business & Work", "17"),
    getItem("Athletics", "18"),
    getItem("Health & Wellness", "19"),
    getItem("Current Events", "20"),
    getItem("Arts & Culture", "21"),
  ];

  const itemsMenu = [
    {
      key: "1",
      label: "Editorial",
    },
    {
      key: "2",
      label: "Following",
    },
    {
      key: "3",
      label: "Wallpapers",
    },
    {
      key: "4",
      label: "3D Renders",
    },
    {
      key: "5",
      label: "Travel",
    },
    {
      key: "6",
      label: "Nature",
    },
    {
      key: "7",
      label: "Street Photography",
    },
    {
      key: "8",
      label: "Experimental",
    },
    {
      key: "9",
      label: "Textures & Patterns",
    },
    {
      key: "10",
      label: "Animals",
    },
    {
      key: "11",
      label: "Architecture & Interiors",
    },
    {
      key: "12",
      label: "Fashion & Beauty",
    },
    {
      key: "13",
      label: "Film",
    },
    {
      key: "14",
      label: "Food & Drink",
    },
    {
      key: "15",
      label: "People",
    },
    {
      key: "16",
      label: "Spirituality",
    },
    {
      key: "17",
      label: "Business & Work",
    },
    {
      key: "18",
      label: "Athletics",
    },
    {
      key: "19",
      label: "Health & Wellness",
    },
    {
      key: "20",
      label: "Current Events",
    },
    {
      key: "21",
      label: "Arts & Culture",
    }
  ]

  function handleMenuChange(selectedKey: string) {
    const item = itemsMenu.find(({ key }) => key === selectedKey);
    setQuery({
      pageNumber: 1,
      limit: 30,
      search: item?.label,
    });
    setSearch("");
  }


  return (
    <>
      <Layout className="layout">
        <Header
          style={{
            position: "fixed",
            width: "100%",
            backgroundColor: "white",
            height: "auto",
            zIndex: 1,
          }}
        >
          <Space size="large" align="center">
            <div>
              <img
                src="./logo.png"
                alt="logo"
                className="logo"
                onClick={() => {
                  setQuery({
                    pageNumber: 1,
                    limit: 30,
                    search: "random",
                  });
                  setSearch("");
                }}
              />
            </div>
            <div className="search">
              <Input
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onPressEnter={() =>
                  setQuery({
                    pageNumber: 1,
                    limit: 30,
                    search: search,
                  })
                }
              />
            </div>
            <div className="menu-button">
              <Button type="text" href="https://unsplash.com/advertise">
                Advertise
              </Button>
              <Button
                type="text"
                href="https://unsplash.com/blog?utm_source=unsplash&utm_medium=referral"
              >
                Blog
              </Button>
              <Button
                type="text"
                className="gradient-text"
                href="https://unsplash.com/plus"
              >
                Unsplash+
              </Button>
              <Button>Submit a Photo</Button>
              <BellOutlined style={{ margin: "10px", cursor: "pointer" }} />
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
              >
                <UserOutlined style={{ margin: "10px", cursor: "pointer" }} />
              </Dropdown>
              {/* <MenuOutlined style={{ margin: "10px", cursor: "pointer" }} /> */}
            </div>
          </Space>
          <br />
          <Menu
            mode="horizontal"
            items={menuItems}
            onSelect={(e) => {
              handleMenuChange(e.key);
            }}
            className="menu-nav"
          />
        </Header>
        <Content style={{ padding: "0 50px",zIndex:0, paddingTop:"10em" }}>
          <div>
            <Spin spinning={isFetching} className="loading" />
            <div hidden={isFetching} className="gallery">
              {data?.results?.map((item: any) => {
                return (
                  <div className="image">
                    <img
                      className="image__img"
                      src={item.urls.small}
                      alt={item.description}
                      key={item.id}
                    />
                    <div className="image__overlay">
                      <Space size="small">
                        <a
                          href={`${item.user.links.self}?client_id=${UNSPLASH_API_KEY}`}
                          target="_blank"
                          className="image__user_name"
                        >
                          {item.user.name}
                        </a>
                        <a
                          href={item.user.links.self}
                          target="_blank"
                          className="image__user_pfp"
                        >
                          <img
                            src={item.user.profile_image.small}
                            alt=""
                            className="image__user_pfp2"
                          />
                        </a>
                        <Radio.Group className="image__like_add">
                          <Radio.Button value="like">
                            <HeartOutlined />
                          </Radio.Button>
                          <Radio.Button value="add">
                            <PlusOutlined />
                          </Radio.Button>
                        </Radio.Group>
                      </Space>
                      <Button
                        className="image__download"
                        href={`${item.links.download}?client_id=${UNSPLASH_API_KEY}`}
                        download
                        target="_blank"
                        color="transparent"
                      >
                        <DownloadOutlined />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Pagination
            defaultCurrent={1}
            total={data?.total_pages}
            onChange={(page: number) => {
              setQuery({
                pageNumber: page,
                limit: 30,
                search: search,
              });
            }}
          />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Un-Splash Clone ©2023 Created by Vedant Sonkar
        </Footer>
      </Layout>
    </>
  );
};

export default App;
