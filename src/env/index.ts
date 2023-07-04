import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test','production']).default('dev'),
    PORT: z.coerce.number().default(3000),
})


const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    console.error('Invalid environment.', _env.error.format())

    throw new Error('Invalid environment.')
}

export const env = _env.data
