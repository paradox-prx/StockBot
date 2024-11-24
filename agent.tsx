import React from 'react';
import {
  Agent,
  TTS,
} from 'react-agents';

//

export default function MyAgent() {
  return (
    <Agent /* */ >
      <TTS voiceEndpoint="elevenlabs:drake:1thOSihlbbWeiCGuN5Nw" />
    </Agent>
  );
}
