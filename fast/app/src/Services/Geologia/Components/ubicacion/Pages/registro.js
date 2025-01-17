import { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SInput, SLoad, SMapView, SNavigation, SPage, SText, SThread, SView } from 'servisofts-component';
import ubicacion from '..';
import PButtom from '../../../../../Components/PButtom';

class registro extends Component {
	constructor(props) {
		super(props);
		this.state = { region: false, dirType: "moveMap", nombre: " " };
		this.key_grupo = SNavigation.getParam("key");
		this.key_edit = SNavigation.getParam("key_edit");

	}

	componentDidMount() {
		new SThread(100, "sad", false).start(() => {
			this.setState({
				region: {
					latitude: -17.7833276,
					longitude: -63.1821408,
				}
			})
		})

	}

	showMapa() {
		this.data = {};
		if (this.key_edit) {
			this.data = ubicacion.Actions.getByKey(this.key_edit, this.props);
			if (!this.data) return <SLoad />;
		}
		console.log("direc ", this.data.longitud)
		return <>
			<SView col={"xs-12"} flex>
				<SMapView
					initialRegion={{
						latitude: this.data.latitud ?? -17.7833276,
						longitude: this.data.longitud ?? -63.1821408,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					// para ejecutar centar mapa
					ref={(map) => this.map = map}
					// onPress={(e) => {
					//      this.setState({ regionClick: e });
					// }}
					onRegionChangeComplete={(region) => {
						// cuando cambio de posicion (mouse)
						this.setState({ region: region, dirType: "moveMap" });
					}}
					preventCenter>
					{/* <SMarker lat={this.state.region?.latitude} lng={this.state.region?.longitude}  >
                        <SIcon name="Marker" width={20} height={30} />
                    </SMarker> */}
				</SMapView>
			</SView>

			<SView style={{ position: 'absolute', }} center   >
				<SIcon name="MarcadorMapa" width={20} height={20} />
			</SView>
		</>
	}

	getGeocode() {
		if (!this.state.region) return null;
		if (this.state.dirType != "moveMap") return null;
		var geocode = Parent.Actions.geocode(this.state.region, this.props);
		if (!geocode) return 'cargando...';
		var aux = geocode.direccion;
		if (!aux) return "cargando..."
		// alert('getGeocode');

		if (this.state.nombre != aux) {
			this.state.nombre = aux;
			this.setState({ ...this.state });
		}
		return aux;
	}



	formulario() {
		this.data = {};
		if (this.key_edit) {
			this.data = ubicacion.Actions.getByKey(this.key_edit, this.props);
			if (!this.data) return <SLoad />;
		}
 		return (
			<SForm
				ref={form => {
					this.form = form;
				}}
				col={"xs-11 sm-9 lg-8"}
				inputProps={{ customStyle: "Calistenia" }}
				inputs={{
					descripcion_ubicacion: {
						defaultValue: this.data["descripcion_ubicacion"],
						placeholder: "Nombre de la Ubicación",
						isRequired: true,
					}
				}}
				onSubmit={values => {
					if (this.key_edit) {
						values.direccion_ubicacion = "actualizado";
						values.latitud = this.state.region?.latitude;
						values.longitud = this.state.region?.longitude;
						ubicacion.Actions.editar({ ...this.data, ...values }, this.props);
					} else {
						values.direccion_ubicacion = "Av. roca noooooooooooo";
						values.key_grupo = this.key_grupo;
						values.estado_ubicacion = "1";
						values.latitud = this.state.region?.latitude;
						values.longitud = this.state.region?.longitude;
						ubicacion.Actions.registro(values, this.props);
					}
				}}
			/>
		);
	}

	render() {
		// var _direcion;
		// var _latitude;
		// var _longitude;

		var reducer = this.props.state[ubicacion.component + "Reducer"];
		if (reducer.type == "registro" || reducer.type == "editar" && reducer.estado == "exito") {
			reducer.estado = "";
			// this.props.dispatch({
			// 	component: "direccion_usuario",
			// 	type: "editarMiDireccion",
			// 	data: reducer.lastRegister
			// })

			// _direcion = this.state?.nombre;
			// _latitude = this.state?.latitude;
			// _longitude = this.state?.longitude;
			// SNavigation.replace("/");
			//todo volver lista ubicacion por el codigo de grupo
			SNavigation.goBack();
		}
		// this.getGeocode()


		return (<SPage title={'Elegir mi dirección'} disableScroll center>

			<SView col={"xs-12"} center flex>
				{this.showMapa()}
			</SView >
			<SView col={"xs-12 md-10 lg-8 xl-6"} height={280} row center>
				<SHr height={20} />
				<SView col={"xs-12"} center row border={'transparent'}>

					{this.formulario()}
					<SHr height={10} />
				</SView>

				<SView col={"xs-12"} row center height={40} border={'transparent'}>
					<SView width={40} center>
						<SIcon name={'LocationTapeke'} height={14} width={14} />
					</SView>
					<SView onPress={() => { this.map.center(); }}>
						<SText fontSize={14} font={"Roboto"} bold>Utilizar mi ubicación actual</SText>
					</SView>
				</SView>

				<SView col={"xs-8.8"} row center border={'transparent'}  >
					<PButtom fontSize={16} onPress={() => {
						this.form.submit();
					}}>ELEGIR ESTA UBICACIÓN</PButtom>
				</SView>
				<SHr height={10} />
			</SView>
		</ SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(registro);