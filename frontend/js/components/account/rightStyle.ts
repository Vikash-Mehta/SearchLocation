export default (theme: any) => ({
    formWrapper: {
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingBottom: '125px',
        flexBasis: '500px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2
        }
    },
    title: {
        marginTop: theme.spacing.unit * 3
    },
    subtitle: {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing.unit * 0.5
    },
    facebookButton: {
        marginTop: theme.spacing.unit * 3,
        width: '100%'
    },
    facebookIcon: {
        marginRight: theme.spacing.unit
    },
    googleButton: {
        marginTop: theme.spacing.unit * 2,
        width: '100%'
    },
    googleIcon: {
        marginRight: theme.spacing.unit
    },
    sugestion: {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    fields: {
        marginTop: theme.spacing.unit * 2
    },
    textField: {
        width: '100%',
        '& + & ': {
            marginTop: theme.spacing.unit * 2
        }
    },
    policy: {
        display: 'flex',
        alignItems: 'center'
    },
    policyCheckbox: {
        marginLeft: '-14px'
    },
    policyText: {
        display: 'inline',
        color: theme.palette.text.secondary
    },
    policyUrl: {
        color: theme.palette.text.primary,
        '&:hover': {
            cursor: 'pointer',
            color: theme.palette.primary.main
        }
    },
    progress: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    signInButton: {
        marginTop: theme.spacing.unit * 2,
        width: '100%'
    },
    signUp: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    },
    signUpUrl: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    fieldError: {
        color: theme.palette.danger.main,
        marginBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit
    },
    submitError: {
        color: theme.palette.danger.main,
        alignText: 'center',
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2
    }
});
