import React from "react";
import Card from "@components/ui/Card";
import { Cards } from "./styles";
import { Tool } from "interfaces";

// import { Container } from './styles';

const ListTools: React.FC = () => {

  const tools: Tool[] = [
    {
      title: "Notion",
      description:
        "Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.",
      tags: ["documentation", "development", "backend", "frontend"],
    },
    {
      title: "json-server",
      description:
        "Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.",
      tags: ["documentation", "development", "backend", "frontend"],
    },
    {
      title: "fastify",
      description:
        "Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.",
      tags: ["documentation", "development", "backend", "frontend"],
    },
    {
      title: "React.js",
      description:
        "Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.",
      tags: ["documentation", "development", "backend", "frontend"],
    },
  ];

  return (
    <Cards>
      {tools.map((tool, index) => {
        return (
          <Card
            title={tool.title}
            description={tool.description}
            tags={tool.tags}
            key={index}
          />
        );
      })}
    </Cards>
  );
};

export default ListTools;
