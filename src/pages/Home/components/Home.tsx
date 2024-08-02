import { Box, Grid, GridItem, useColorMode } from '@chakra-ui/react';
import HomeLayout from '../../../components/Layout/HomeLayout/HomeLayout';
import { useState } from 'react';
import MarkdownEditor from '../../../components/Elements/MarkdownEditor/MarkdownEditor';

export default function Home() {
  const [value, setValue] = useState<string | undefined>('**Hello world!!!**');
  const { colorMode } = useColorMode();
  return (
    <HomeLayout>
      <Box>Simple Markdown editor</Box>
      <Grid
        templateColumns={{ sm: 'none', md: 'repeat(2, 1fr)' }}
        templateRows={{ sm: 'repeat(2, 1fr)' }}
        gap={'8px'}
      >
        <GridItem>
          <MarkdownEditor
            value={value}
            onChange={setValue}
            colorMode={colorMode}
            extraCommands={[]}
          />
        </GridItem>
        <GridItem>
          <MarkdownEditor
            value={value}
            colorMode={colorMode}
            preview='preview'
            extraCommands={[]}
            hideToolbar
          />
        </GridItem>
      </Grid>
    </HomeLayout>
  );
}
