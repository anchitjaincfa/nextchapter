#!/usr/bin/env bash
set -euo pipefail

fail=0
scan_roots=()
for candidate in src app pages public components; do
  [[ -d "$candidate" ]] && scan_roots+=("$candidate")
done

if [[ ${#scan_roots[@]} -eq 0 ]]; then
  echo "No application directories yet; boundary guard passes."
  exit 0
fi

check() {
  label="$1"
  pattern="$2"
  if grep -RInE --exclude='*.md' --exclude='*.map' --exclude-dir=node_modules "$pattern" "${scan_roots[@]}"; then
    echo "::error::Static demo boundary violated: $label"
    fail=1
  fi
}

check "backend/database SDK referenced" '(@supabase|supabase-js|firebase|prisma|drizzle-orm|mongodb)'
check "AI/model API referenced" '(openai|anthropic|claude|gemini|langchain)'
check "chat or scoring implementation referenced" '(compatibility[_ -]?score|chat[_ -]?(room|message)|coach[_ -]?(booking|marketplace))'
check "production secrets or service-role keys referenced" '(SERVICE_ROLE|SUPABASE_SERVICE|OPENAI_API_KEY|ANTHROPIC_API_KEY)'
check "unapproved network form submission" '(formspree|typeform|api\.airtable|fetch\(["'"']https?://|axios\.(post|put|patch))'

if [[ "$fail" -ne 0 ]]; then
  echo "The v0 demo must remain static, synthetic, and free of AI/chat/scores/coaching."
  exit 1
fi

echo "Static demo boundaries verified."