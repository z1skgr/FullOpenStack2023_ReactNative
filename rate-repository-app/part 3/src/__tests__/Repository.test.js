import { useState } from 'react';
import { Text, TextInput, Pressable, View } from 'react-native';
import { render, fireEvent, screen } from '@testing-library/react-native';
import kFormat from '../components/StatisticsContainer'

import RepositoryListContainer from "../components/RepositoryListContainer";

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
  
        // Add your test code here
        const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
        const repositoryNodes = repositories.edges.map((edge) => edge.node);

        const fullNames = getAllByTestId('repositoryfullName');
        const descriptions = getAllByTestId('repositoryDescription');
        const languages = getAllByTestId('repositoryLanguage');


        repositoryNodes.forEach((node, index) => {

          const {
            fullName,
            description,
            language,
          } = node;



          expect(fullNames[index]).toHaveTextContent(fullName);
          expect(descriptions[index]).toHaveTextContent(description);
          expect(languages[index]).toHaveTextContent(language);

          const repoCounts = getAllByTestId("repositoryCounts");
          expect(repoCounts).toHaveLength(8);
          expect(repoCounts[0]).toHaveTextContent("21.9k");
          expect(repoCounts[1]).toHaveTextContent("1.6k");
          expect(repoCounts[2]).toHaveTextContent("3");
          expect(repoCounts[3]).toHaveTextContent("88");
          expect(repoCounts[4]).toHaveTextContent("1.8k");
          expect(repoCounts[5]).toHaveTextContent("69");
          expect(repoCounts[6]).toHaveTextContent("3");
          expect(repoCounts[7]).toHaveTextContent("72");
        });

      });
    });
  });