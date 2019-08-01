export default (theme: any) => ({
  heading: {
    textAlign: 'center',
  },
  headingSubtitle: {
    color: '#78909C',
    marginTop: -15,
    fontSize: 16,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  oauthButtonWrapper: {
    minWidth: 155,
    boxSizing: 'border-box',
  },
  spacer: {
    height: 30,
  },
  primaryButton: {
    color: '#fff',
    width: '100%',
    marginBottom: 15,
    marginTop: 10,
    paddingTop: 12,
    paddingBottom: 12,
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
  },
  secondaryLink: {
    marginLeft: 10,
  },
  formControl: {
    marginBottom: 20,
  },
  paper: {
    padding: 24,
    width: '100%',
    maxWidth: 560,
    boxSizing: 'border-box',

    '& h3': {
      marginTop: 0,
    }
  },
  learnMore: {
    textDecoration: 'none',
    color: '#0277bd'
  },
  '@media (max-width: 460px)': {
    paper: {
      boxShadow: 'none',
      padding: '5px 18px 24px',
    },
  },
});
