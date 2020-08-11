import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },
    profileInfo: {
        marginLeft: 16
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 24,
        backgroundColor: '#eee'
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4
    },
    bio: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
        marginHorizontal: 24,
        lineHeight: 24,
        // textAlign: 'justify',
    },
    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 14,
    },
    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },
    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
        marginLeft: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    favored: {
        backgroundColor: '#e33d3d',
    },
    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    contactButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    }
});

export default styles;