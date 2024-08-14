import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../Welcome";
import Signin from "../Signin";
import Cadastro from "../Cadastro";
import Principal from "../Principal";
import Carro from "../Carro";
import Visitante from "../Visitante"
import InfoVisit from "../InfoVisit"
import NovoVisit from "../NovoVisit"
import Militar from "../militar"
import Carro1 from "../Carro1"
import Militar1 from "../Militar1"
import InfoVisit1 from "../InfoVisit1"
import Registro from "../Registro"
import Registro1 from "../Registro1"



const stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <stack.Navigator>
            <stack.Screen 
            name="Welcome" 
            component={Welcome} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Signin" 
            component={Signin} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Principal" 
            component={Principal} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Carro" 
            component={Carro} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Militar" 
            component={Militar} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Visitante" 
            component={Visitante} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="InfoVisit" 
            component={InfoVisit} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="NovoVisit" 
            component={NovoVisit} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Carro1" 
            component={Carro1} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Militar1" 
            component={Militar1} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="InfoVisit1" 
            component={InfoVisit1} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Registro" 
            component={Registro} 
            options={{headerShown: false}}
            />
            <stack.Screen 
            name="Registro1" 
            component={Registro1} 
            options={{headerShown: false}}
            />
        </stack.Navigator>
    )
}