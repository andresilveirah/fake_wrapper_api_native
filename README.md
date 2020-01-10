# fake_wrapper_api_native

Similar to https://github.com/andresilveirah/fake_wrapper_api/ but instead of returning an URL, it returns a fake message object.

## Routes

### `GET /gdpr/message-url?foo=bar`

```json
{
  "message": {
    "title": "Hello World!",
    "description": "This is a message description.",
    "actions": [
      { "label": "I accept", "type": 11, "id": 111 },
      { "label": "Reject", "type": 13, "id": 222 },
      { "label": "Show Options", "type": 12, "id": 333 }
    ]
  },
  "uuid": "cfa454f8-635b-43e5-b6ba-1fbff7e56fa9",
  "meta": "{'foo': 'bar'}",
  "consents": {
    "consentString": "BOn2OwMOn2OwMAGABCENCn-AAAAqyABAFIA",
    "status": "acceptedSome",
    "acceptedVendors": ["ABCD"],
    "acceptedPurposes": []
  },
  "foo": "bar"
}
```

The server will send back in the response whatever was sent as query param. (E.g. `foo: bar`)

### `POST /gdpr/consent/`

Data:
```json
{
  "foo": "bar"
}
```

Response:

```json
{
  "uuid": "cfa454f8-635b-43e5-b6ba-1fbff7e56fa9",
  "meta": "{'foo': 'bar'}",
  "userConsent": {
    "euconsent": "BOn2OwMOn2OwMAGABCENCn-AAAAqyABAFIA",
    "acceptedVendors": ["ABCD"],
    "acceptedPurposes": []
  },
  "meta": "{'foo': 'bar'}"
}
```

The server will send back in the response whatever was sent in the request's body. (E.g. `foo: bar`)
