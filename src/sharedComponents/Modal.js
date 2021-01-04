import React, { Component } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import styles from './ModalStyles';
import StarRating from 'react-native-star-rating'
import { rateRides } from '../../src/state/actions'
import colors from '../stylesheet/colors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoading: state.rateRideReducer && state.rateRideReducer.isLoading,
        rateRides: state.rateRideReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        rateRides: (data) => dispatch(rateRides(data)),
    };
};

class ModalComponent extends Component {
    state = {
        modalVisible: false,
        starCount: 3
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    onStarRatingPress = (rating) => {
        //console.log('rating', this.state.starCount)
        this.setState({
            starCount: rating
        });
        console.log('rating', this.state.starCount)
    }


    getValues = (visible) => {
        this.setState({ modalVisible: visible });
        const values = {
            bid: this.props.id,
            crating: this.state.starCount
        };
        console.log('values', values)
        this.props.rateRides(values)
        //dispatch(rateRides(values));
    }

    render() {
        const { modalVisible } = this.state;
        const {onPostRating} = this.props;
        return (
            <View style={ styles.centeredView }>
                <Modal
                    animationType="slide"
                    transparent={ true }
                    visible={ modalVisible }
                    onRequestClose={ () => {
                        Alert.alert("Modal has been closed.");
                    } }
                >
                    <View style={ styles.centeredView }>
                        <View style={ styles.modalView }>
                            <StarRating
                                disabled={ false }
                                maxStars={ 5 }
                                rating={ this.state.starCount }
                                selectedStar={ (rating) => this.onStarRatingPress(rating) }
                                fullStarColor={ colors.themeColor }
                            />

                            <TouchableHighlight
                                style={ { ...styles.openButton, backgroundColor: "#2196F3" } }
                                onPress={ () => {
                                    //this.getValues(!modalVisible)
                                    onPostRating(this.state.starCount)
                                    this.setState({ modalVisible: false });

                                }}
                            >
                                <Text style={ styles.textStyle }>Submit</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={ styles.Btn }
                    onPress={ () => {
                        this.setModalVisible(true);
                    } }
                >
                    <Text style={ styles.btn2Text }>Rate Ride</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


//export default ModalComponent;
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent)