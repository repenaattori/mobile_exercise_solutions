import { useState } from 'react';
import { View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown';
import Styles from './styles/Styles.js';
import { RadioButton } from 'react-native-paper';

const products = [
  {name: "Google Chromecast 4k", price: 77},
  {name: "Sony WH-1000XM4", price: 299},
  {name: "JBL Flip 6", price: 79},
  {name: "Genelec 83330A", price: 899}
];

const shippingOptions = [
  {type: 'Fetch from store', price: 0},
  {type: 'DHL', price: 8},
  {type: 'UPS', price: 10},
  {type: 'Post letter', price: 4},
]

export default function App() {

  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(products[0]);
  const [shipping, setShipping] = useState(0);

  const result = product.price * quantity + shippingOptions[shipping].price;

  return (
    <View style={Styles.container}>
      <SelectDropdown
        data={products}
        onSelect={p => setProduct(p)}
        defaultValueByIndex={0}
        buttonTextAfterSelection={p => p.name}
        rowTextForSelection={p=>p.name}
        buttonStyle={{width: 300}}
      />
      <NumericInput
        onChange={q => setQuantity(q)}
        value={quantity}
        minValue={0}
      />
      <RadioButton.Group value={shipping} onValueChange={v => setShipping(v)} >
        <RadioSelection label={shippingOptions[0].type} value={0}/>
        <RadioSelection label={shippingOptions[1].type} value={1}/>
        <RadioSelection label={shippingOptions[2].type} value={2}/>
        <RadioSelection label={shippingOptions[3].type} value={3}/>
      </RadioButton.Group>

      <Text>Price is {result}€</Text>
    </View>
  );
}

function RadioSelection({label, value}){
  return(
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
       <RadioButton value={value}/>
       <Text>{label}</Text>
    </View>
  );
}

