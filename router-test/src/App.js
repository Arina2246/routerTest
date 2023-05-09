import { MantineProvider, NumberInput, createStyles} from '@mantine/core';
import './App.css';


const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '600px',
    height: '10px',
    padding: '0px'

    
  },
}));

function App() {
  const { classes } = useStyles();
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <div className="App">
      <NumberInput
        className={classes.wrapper}
        // mt="xl"
        // label="NumberInput with custom styles"
        // placeholder="NumberInput with custom styles"
        // description="Description below the input"
      />
    </div>
    </MantineProvider>
  );
}

export default App;
