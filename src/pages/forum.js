import React from "react";
import "./forum.css";

function Forum() {
    var discussion = {
        "How to make a good coffee?": "I am a coffee lover and I want to make a good coffee at home. Can anyone help me with the recipe?",
        "Any suggestions for buying coffee machine?": "I am planning to buy a coffee machine for my home. Can anyone suggest me a good coffee machine?",
        "Why does coffee smell like soy sauce?": "I have noticed that coffee smells like soy sauce. Can anyone tell me the reason behind it?",
        "EMPTY": "I am a coffee lover and I want to make a good coffee at home. Can anyone help me with the recipe?",
        "HELLO?": "I am planning to buy a coffee machine for my home. Can anyone suggest me a good coffee machine?",
    };
    return (
        <div className="forum_bg">
            <div className="forum_container">
                <span className="forum_title">Discussion</span>
                <div className="forum_discussion">
                    <ul className="discussion_list">
                        {Object.keys(discussion).map((key, index) => {
                            return <li key={index} className="discussion_block">
                                <a href="#" className="discussion_title">{key}</a>
                                <span className="discussion_state">
                                    <i class="fa fa-comment"></i>
                                </span>
                            </li>
                        })}
                    </ul>
                </div>

                <button className="add_discussion">Add Discussion</button>
                <button className="del_discussion">Delete Discussion</button>
            </div>
        </div>
    );
}

export default Forum;