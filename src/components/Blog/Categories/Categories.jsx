import React from 'react';
import './Categories.css';
import { FaSearch, FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';
import img114 from "../../../assets/img114.png";
import img115 from "../../../assets/img115.png";
import img116 from "../../../assets/img116.png";

const Categories = () => {
  const posts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      image: img114,
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      image: img115,
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Handmade",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      image: img116,
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  
  ];

  return (
    <div className="blog-container">
      <div className="main-content">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-meta">
              <span><FaUser /> {post.admin}</span>
              <span><FaCalendarAlt /> {post.date}</span>
              <span><FaTag /> {post.category}</span>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-desc">{post.desc}</p>
            <button className="read-more">Read more</button>
          </article>
        ))}
        
        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn2">Next</button>
        </div>
      </div>

      <aside className="sidebar">
        <div className="search-box">
          <input type="text" />
          <FaSearch className="search-icon" />
        </div>

        <div className="sidebar-section">
          <h3>Categories</h3>
          <ul className="cat-list">
            <li><span>Crafts</span> <span>2</span></li>
            <li><span>Design</span> <span>8</span></li>
            <li><span>Handmade</span> <span>7</span></li>
            <li><span>Interior</span> <span>1</span></li>
            <li><span>Wood</span> <span>6</span></li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h3>Recent Posts</h3>
          {posts.map(post => (
            <div key={post.id} className="recent-post-item">
              <img src={post.image} alt="recent" />
              <div>
                <h4>{post.title}</h4>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Categories;
