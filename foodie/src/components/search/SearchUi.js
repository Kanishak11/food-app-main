import React from 'react'

export default function SearchUi() {
    return (
        <Grid>
        <Grid.Column width={6}>
          <Search
            loading={loading}
            onResultSelect={(e, data) =>
              dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
            }
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
          />
        </Grid.Column>
  
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify({ loading, results, value }, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
    
}
