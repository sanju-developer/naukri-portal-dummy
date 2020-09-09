import React from "react";
import { WithContext as ReactTags } from "react-tag-input";

import { Skills } from "utils/constants/skillsConstant";

import "./skillsInput.scss";

const suggestions = Skills.map(country => {
  return {
    id: country,
    text: country
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class SkillsField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: suggestions
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState(
      {
        tags: tags.filter((tag, index) => index !== i)
      },
      () => this.props.addSkills(this.state.tags)
    );
  }

  handleAddition(tag) {
    this.setState(
      state => ({ tags: [...state.tags, tag] }),
      () => this.props.addSkills(this.state.tags)
    );
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags }, () =>
      this.props.addSkills(this.state.tags)
    );
  }

  handleTagClick(index) {
    console.log("The tag at index " + index + " was clicked");
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          id="skills"
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }
}
