import React, { useState } from "react";
import "./forum.css";

function Forum() {
    const [discussion, setDiscussion] = useState({
        "How to make a good coffee?": "I am a coffee lover and I want to make a good coffee at home. Can anyone help me with the recipe?",
        "Any suggestions for buying coffee machine?": "I am planning to buy a coffee machine for my home. Can anyone suggest me a good coffee machine?",
        "Why does coffee smell like soy sauce?": "I have noticed that coffee smells like soy sauce. Can anyone tell me the reason behind it?",
        "EMPTY": "I am a coffee lover and I want to make a good coffee at home. Can anyone help me with the recipe?",
        "HELLO?": "I am planning to buy a coffee machine for my home. Can anyone suggest me a good coffee machine?",
    });

    const [selectedProperty, setSelectedProperty] = useState([]);
    const [showAddWindow, setShowAddWindow] = useState(false);

    const handlePropertySelection = (property) => {
        setSelectedProperty(property);
    }


    const Add_discussion = () => {
        setShowAddWindow(true); // Show the add_window when Add Discussion button is clicked
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    const cancelAddDiscussion = () => {
        setShowAddWindow(false); // Hide the add_window
        document.body.style.overflow = 'auto'; // Enable scrolling
    }


    const [selectedDiscussions, setSelectedDiscussions] = useState([]);

    // Function to toggle selected discussion
    const toggleDiscussion = (title) => {
        if (selectedDiscussions.includes(title)) {
            setSelectedDiscussions(selectedDiscussions.filter(item => item !== title));
        } else {
            setSelectedDiscussions([...selectedDiscussions, title]);
        }
    };

    // Function to delete selected discussions
    const deleteSelectedDiscussions = () => {
        const updatedDiscussion = { ...discussion };
        selectedDiscussions.forEach(title => {
            delete updatedDiscussion[title];
        });
        setDiscussion(updatedDiscussion);
        setSelectedDiscussions([]);
    };

    return (
        <div className="forum_bg">
            <div className={`forum_container ${showAddWindow ? 'blurred' : ''}`}>
                <span className="forum_title">Discussion</span>
                <div className="forum_discussion">
                    <ul className="discussion_list">
                        {Object.keys(discussion).map((key, index) => {
                            return (
                                <li key={index} className="discussion_block">
                                    <input
                                        type="checkbox"
                                        checked={selectedDiscussions.includes(key)}
                                        onChange={() => toggleDiscussion(key)}
                                    />
                                    <a href="#" className="discussion_title">{key}</a>
                                    <span className="discussion_state">
                                        <i className="fa fa-comment"></i>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <button onClick={Add_discussion} className="add_discussion">Add Discussion</button>
                <button onClick={deleteSelectedDiscussions} className="del_discussion" >Delete Discussion</button>
            </div>
            {showAddWindow && (
                <div className="add_window">
                    <p>
                        <h1>Enter your problem : </h1>
                        <input type="text" id="discussion_title" placeholder="Title" />
                        <span>Choose property</span>
                        <div className="property-buttons">
                            <button onClick={() => handlePropertySelection("Property 1")}>Property 1</button>
                            <button onClick={() => handlePropertySelection("Property 2")}>Property 2</button>
                            <button onClick={() => handlePropertySelection("Property 3")}>Property 3</button>
                        </div>
                        <button className="add_window_confirm">Confirm</button>
                        <button className="close_add_window" onClick={cancelAddDiscussion}>Cancel</button>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Forum;