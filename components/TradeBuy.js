import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useKrakenContext} from '../context/Context';





function TradeBuy() {




  return (
<>
<Text>

</Text>

    <DataTable>
        <DataTable.Header>
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title>Amount</DataTable.Title>
          <DataTable.Title >Total</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Bob</DataTable.Cell>
          <DataTable.Cell>test@test.com</DataTable.Cell>
          <DataTable.Cell numeric>105</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Mei</DataTable.Cell>
          <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>23</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
</>
)
}

export default TradeBuy